from pydantic import BaseModel
from typing import TypedDict


class BookSchema(TypedDict):
    age_group: str | None
    author: str
    contributor: str
    contributor_note: str | None
    description: str | None
    isbns: list
    price: str | float
    publisher: str
    ranks_history: list
    reviews: list
    title: str


class ExternalAPISchema(BaseModel):
    copyright: str
    num_results: int
    results: list[BookSchema]
    status: str


class BooksResponse(TypedDict):
    data: ExternalAPISchema
    detail: str | None
