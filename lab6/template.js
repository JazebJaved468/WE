// Create nav element
const navbar = document.createElement('nav');
navbar.className = 'navbar';

// Create div for organization name
const nameDiv = document.createElement('div');
nameDiv.className = 'name';

// Create organization name paragraph
const orgName = document.createElement('p');
orgName.className = 'org-name';
orgName.textContent = 'Faber & Co';
nameDiv.appendChild(orgName);

// Create paragraph for 'Real Estate' text
const realEstate = document.createElement('p');
realEstate.textContent = 'Real Estate';
nameDiv.appendChild(realEstate);

navbar.appendChild(nameDiv);

// Create div for login
const loginDiv = document.createElement('div');
loginDiv.className = 'login';

// Create span for account_circle symbol
const accountIcon = document.createElement('span');
accountIcon.className = 'material-symbols-outlined';
accountIcon.textContent = 'account_circle';
loginDiv.appendChild(accountIcon);

// Create paragraph for 'Login' text
const loginText = document.createElement('p');
loginText.textContent = 'Login';
loginDiv.appendChild(loginText);

navbar.appendChild(loginDiv);

// Create ul element for links
const linksList = document.createElement('ul');
linksList.className = 'links';

// Create li elements for each link
const links = ['Home', 'Contact', 'Agents', 'Book Online'];
for (let linkText of links) {
  const linkItem = document.createElement('li');
  linkItem.textContent = linkText;
  linksList.appendChild(linkItem);
}

navbar.appendChild(linksList);

// Create div for hero image
const heroImgDiv = document.createElement('div');
heroImgDiv.className = 'hero-img';

// Create image element for hero image
const heroImg = document.createElement('img');
heroImg.src = './heroimg.jpg';
heroImg.alt = '';
heroImg.height = '100%';
heroImgDiv.appendChild(heroImg);

// Create section for hero
const heroSection = document.createElement('section');
heroSection.className = 'hero';

// Create div for showcase
const showcaseDiv = document.createElement('div');
showcaseDiv.className = 'showcase';

// Create h2 element for house title
const houseTitle = document.createElement('h2');
houseTitle.textContent = 'STUNNING 6 BED HOUSE IN THE HEART OF THE CITY';
showcaseDiv.appendChild(houseTitle);

// Create p element for house description
const houseDesc = document.createElement('p');
houseDesc.className = 'desc';
houseDesc.textContent =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate consectetur expedita a consequatur amet ipsa quod, animi ut voluptate perferendis in tempora ullam corrupti. Neque, quam! Iusto possimus delectus cumque.';
showcaseDiv.appendChild(houseDesc);

// Create p element for house price
const housePrice = document.createElement('p');
housePrice.className = 'price';
housePrice.textContent = '$2,000,000';
showcaseDiv.appendChild(housePrice);

// Create a element for book now link
const bookNowLink = document.createElement('a');
bookNowLink.href = '#';
bookNowLink.className = 'book-now';
bookNowLink.textContent = 'Book Now';
showcaseDiv.appendChild(bookNowLink);

heroSection.appendChild(showcaseDiv);

// Create div for contact
const contactDiv = document.createElement('div');
contactDiv.className = 'contact';

// Create span for call symbol
const callIcon = document.createElement('span');
callIcon.className = 'material-symbols-rounded';
callIcon.textContent = 'call';
contactDiv.appendChild(callIcon);

// Create p element for contact details
const contactDetails = document.createElement('p');
contactDetails.textContent = 'Call via 123-456-789';
contactDiv.appendChild(contactDetails);

heroSection.appendChild(contactDiv);

// Create section for cards
const cardsSection = document.createElement('section');
cardsSection.className = 'cards';

// Create h1 element for latest properties
const latestProperties = document.createElement('h1');
latestProperties.textContent = 'Latest Properties for Sale';
cardsSection.appendChild(latestProperties);

// Create div for card container
const cardContainer = document.createElement('div');
cardContainer.className = 'container';

// Create cards
const cardData = [
  {
    imageSrc: './house1.jpg',
    title: 'Gown Avenue',
    price: '$500,000',
    rooms: '4 bedrooms',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus quos nemo assumenda eum repellendus itaque debitis et quas aliquid doloremque, enim corporis praesentium aliquam esse vitae ab ad animi!',
    link: '#'
  },
  {
    imageSrc: './house2.jpg',
    title: 'Gown Avenue',
    price: '$500,000',
    rooms: '4 bedrooms',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus quos nemo assumenda eum repellendus itaque debitis et quas aliquid doloremque, enim corporis praesentium aliquam esse vitae ab ad animi!',
    link: '#'
  },
  {
    imageSrc: './house3.jpg',
    title: 'Gown Avenue',
    price: '$500,000',
    rooms: '4 bedrooms',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus quos nemo assumenda eum repellendus itaque debitis et quas aliquid doloremque, enim corporis praesentium aliquam esse vitae ab ad animi!',
    link: '#'
  }
];

for (let card of cardData) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';

  const cardImg = document.createElement('img');
  cardImg.src = card.imageSrc;
  cardImg.alt = '';
  cardDiv.appendChild(cardImg);

  const cardTitle = document.createElement('h3');
  cardTitle.textContent = card.title;
  cardDiv.appendChild(cardTitle);

  const cardPrice = document.createElement('p');
  cardPrice.className = 'price';
  cardPrice.textContent = card.price;
  cardDiv.appendChild(cardPrice);

  const cardRooms = document.createElement('p');
  cardRooms.className = 'rooms';
  cardRooms.textContent = card.rooms;
  cardDiv.appendChild(cardRooms);

  const cardDesc = document.createElement('p');
  cardDesc.className = 'desc';
  cardDesc.textContent = card.desc;
  cardDiv.appendChild(cardDesc);

  const cardLink = document.createElement('a');
  cardLink.href = card.link;
  cardLink.textContent = 'Read More';
  cardDiv.appendChild(cardLink);

  cardContainer.appendChild(cardDiv);
}

cardsSection.appendChild(cardContainer);

// Create footer
const footer = document.createElement('footer');
footer.className = 'footer';

// Create h1 element for latest rental properties
const latestRentalProperties = document.createElement('h1');
latestRentalProperties.textContent = 'Latest Rental Properties';
footer.appendChild(latestRentalProperties);

// Create div for details
const detailsDiv = document.createElement('div');
detailsDiv.className = 'details';
// Create image element for footer image
const footerImg = document.createElement('img');
footerImg.src = './footimg.jpg';
footerImg.alt = '';
detailsDiv.appendChild(footerImg);

// Create div for description
const descDiv = document.createElement('div');
descDiv.className = 'desc';

// Create h3 element for property title
const propertyTitle = document.createElement('h3');
propertyTitle.textContent = 'Chase Avenue';
descDiv.appendChild(propertyTitle);

// Create p element for number of rooms
const numRooms = document.createElement('p');
numRooms.className = 'room';
numRooms.textContent = '4 Bedrooms';
descDiv.appendChild(numRooms);

// Create p element for property description
const propertyDesc = document.createElement('p');
propertyDesc.className = 'des';
propertyDesc.textContent =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod deserunt corrupti exercitationem ullam. Fugit porro ex similique.';
descDiv.appendChild(propertyDesc);

detailsDiv.appendChild(descDiv);

footer.appendChild(detailsDiv);

// Append all elements to the document body
document.body.appendChild(navbar);
document.body.appendChild(heroImgDiv);
document.body.appendChild(heroSection);
document.body.appendChild(cardsSection);
document.body.appendChild(footer);