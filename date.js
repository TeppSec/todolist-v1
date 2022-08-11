//jshint esversion:6

exports.getDate = function () {
  const today = new Date();

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return today.toLocaleDateString('de-DE', options);
};

exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: 'long',
  };

  return today.toLocaleDateString('de-DE', options);
};
