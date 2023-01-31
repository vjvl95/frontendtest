interface props {
  limit: number;
  page: number;
  searchWord: string;
  filter: string;
}

export default function isSessionExistence({
  limit,
  page,
  searchWord,
  filter,
}: props) {
  console.log(limit, page, searchWord, filter, 1);

  if (parseInt(sessionStorage.getItem('limit'))) {
    limit = parseInt(sessionStorage.getItem('limit'));
  }

  if (parseInt(sessionStorage.getItem('page'))) {
    page = parseInt(sessionStorage.getItem('page'));
  }

  if (sessionStorage.getItem('searchWord')) {
    searchWord = sessionStorage.getItem('searchWord');
  }

  if (sessionStorage.getItem('filter')) {
    filter = sessionStorage.getItem('filter');
  }
  console.log(limit, page, searchWord, filter, 2);
  return [limit, page, searchWord, filter];
}
