const dummyApiResponse = {
  showAccordion: true,
  showCustomTabs: false,
  showGitHubProfileFiner: true,
  showImageSlider: false,
  showLightAndDarkMode: true,
  showTicTacToe: true,
  showRandomColor: true,
}

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject('Some error occured! Please try again!');
  });
}

export default featureFlagDataServiceCall;