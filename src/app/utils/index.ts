import { Book } from "../common/interfaces/book";

export function getNewestBooks(books: Book[]): Book[] {
  return books.sort((a, b) => {
    const dateA = getDate(a.publishedDate);
    const dateB = getDate(b.publishedDate);
    return dateB.getTime() - dateA.getTime();
  }).slice(0, 3);
}

function getDate(dateString: string): Date {
  let date: Date;
  if (dateString.length === 4) {
    date = new Date(parseInt(dateString, 10), 11, 31);
  } else {
    date = new Date(dateString);
  }

  return date;
}
