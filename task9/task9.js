const inputField = document.getElementById('state');
const mainDiv = document.getElementsByTagName('main')[0];

function autoComplete() {
  const list = document.createElement('ul');
  list.style.listStyleType = 'none';
  inputField.addEventListener('input', () => {
    countries.forEach((country) => {
      if (
        country.toLowerCase().startsWith(inputField.value.toLowerCase()) &&
        inputField.value.length >= 3
      ) {
        const listItem = document.createElement('li');
        listItem.innerText = country;
        list.append(listItem);
      } else if (!inputField.value) {
        list.innerHTML = '';
      }
    });
  });
  mainDiv.append(list);
}

autoComplete();

let countries = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Dist. of Columbia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Virgin Islands',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'Newfoundland and Labrador',
  'Prince Edward Island',
  'Nova Scotia',
  'New Brunswick',
  'Quebec',
  'Ontario',
  'Manitoba',
  'Saskatchewan',
  'Alberta',
  'British Columbia',
  'Yukon',
  'Northwest Territories',
  'Nunavut',
];
