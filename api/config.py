import os
from pydantic import BaseSettings, Field
from logging import DEBUG, getLogger, basicConfig, FileHandler, Formatter, Logger
from app.shared.constants import Routes, SWAGGER_DESCRIPTION
from app.shared.utils import get_attr

base_dir = os.path.dirname(os.path.abspath(__file__))

'''LOGGING CONFIG'''
log_format = '%(asctime)s:%(levelname)s:%(name)s:%(message)s'
log_dir = base_dir + '/logs'

def create_logger(level: str):
    level_upper = level.upper()
    file_handler = FileHandler(f'{log_dir}/{level_upper}.log')
    file_handler.setFormatter(Formatter(log_format))
    logger = getLogger(f'{level}_logger')
    logger.setLevel(level_upper)
    logger.addHandler(file_handler)

# GENERAL LOGS (ALL)
getLogger().setLevel(DEBUG)
basicConfig(filename=log_dir+'/GENERAL.log', level=DEBUG, format=log_format)
# ERROR LOGS
create_logger('error')
# INFO LOGS
create_logger('info')

'''END LOGGING CONFIG'''


class Settings(BaseSettings):
    cache_hours: str = Field(..., env='CACHE_HOURS')
    external_api_path: str = 'https://api.nytimes.com/svc/books/v3'
    external_api_key: str = Field(..., env='API_KEY')

    error_logger: Logger = getLogger('error_logger')
    info_logger: Logger = getLogger('info_logger')

    class Config:
        case_sensitive = True
        env_file = '.env'


Tags = Routes.__dict__
openapi_tags = get_attr(Tags)

APP_CONFIG = dict(
    title='Books Advisor API',
    version='0.0.1',
    description=SWAGGER_DESCRIPTION,
    contact={
        'name': 'Juan Quintero',
        'url': 'https://gitlab.com/juanesquintero',
        'email': 'juanestquintero@gmail.com',
    },
    openapi_tags=[
        {
            'name': Tags[tag],
            'description': 'Operations with ' + Tags[tag],
        } for tag in openapi_tags
    ]
)
