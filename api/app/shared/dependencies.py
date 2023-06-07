from functools import lru_cache

from starlette.requests import Request
from starlette.responses import JSONResponse

from config import Settings
from app.shared.utils import get_exception



@lru_cache()
def get_settings():
    return Settings()


async def catch_exceptions_middleware(request: Request, call_next):
    _req = request.__dict__.get('scope')
    method, path = _req.get('method'), _req.get('path')
    try:
        return await call_next(request)
    except Exception:
        exp, exception, _exception = get_exception()
        error_msg = f'ERROR {method} {path} -> { exp }'
        get_settings().error_logger.error(f'{error_msg} ---> { _exception }')
        return JSONResponse({'detail': error_msg}, status_code=500)
