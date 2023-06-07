# pylint: disable=invalid-name
from typing import Any


class AppHTTPException(Exception):
    def __init__(
        self,
        status_code: int,
        detail: str,
        data: Any | None = None,
        count: int | None = None,
    ):
        self.status_code = status_code
        self.detail = detail
        self.data = data
        self.count = count
        if count is None:
            del self.count
