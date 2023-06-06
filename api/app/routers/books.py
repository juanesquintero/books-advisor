import os
import httpx
from dotenv import load_dotenv
from datetime import datetime, timedelta

from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse

from app.shared.constants import Routes
from app.shared.dependencies import get_settings
from app.schemas.book import BooksResponse


load_dotenv()

# In-memory cache
cache = {}
cache_hours = int(os.getenv('CACHE_HOURS', '2'))
cache_duration = timedelta(hours=cache_hours)


async def fetch_best_sellers(root_path: str, api_key: str):
    params = {
        'api-key': api_key
    }
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f'{root_path}/lists/best-sellers/history.json',
                params=params
            )
            response.raise_for_status()
            data = response.json().get('results'), 
            return data
    except httpx.HTTPStatusError:
        return None


Book = APIRouter(
    prefix=f'/{Routes.books}',
    tags=[Routes.books]
)


@Book.get('/best-sellers', response_model=BooksResponse)
async def best_sellers(publisher: str = None, settings: str = Depends(get_settings)):
    data = None

    # Check if data is already in cache
    if 'best_sellers' in cache:
        cache_time, cache_data = cache.get('best_sellers')

        if datetime.now() - cache_time < cache_duration:
            data = cache_data

    if 'best_sellers' not in cache or data is None:
        # Retrieve data from the external API
        data = await fetch_best_sellers(settings.external_api_path, settings.external_api_key)
        if data is None:
            return JSONResponse(
                content={'detail': 'Failed to retrieve data from the external API'}, status_code=500
            )
        # Cache the data
        cache['best_sellers'] = (datetime.now(), data)

    if publisher:
        data = [book for book in data if book.get('publisher') == publisher]

    return JSONResponse(content={
        'detail': 'Books fetched!',
        'data': data,
    })
