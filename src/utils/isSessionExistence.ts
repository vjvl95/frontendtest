interface props {
  searchWord: string;
  filter: string;
}

export default function isSessionExistence({ searchWord, filter }: props) {
  if (sessionStorage.getItem('searchWord')) {
    searchWord = sessionStorage.getItem('searchWord');
  }

  if (sessionStorage.getItem('filter')) {
    filter = sessionStorage.getItem('filter');
  }
  return [searchWord, filter];
}
