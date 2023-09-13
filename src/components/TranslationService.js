// TranslationService.js

const translate = async (sourceLang, targetLang, text) => {
    const url = `https://gybra-trans-lator.p.rapidapi.com/translate/${sourceLang}/${targetLang}/${encodeURIComponent(text)}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
        'X-RapidAPI-Host': 'gybra-trans-lator.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export { translate };
  