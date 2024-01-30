# COMMAND LINE APPLICATION

Command line application to read the customers spreadsheet and parse it.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/devrajpatel1006/bus-ticket
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start {content_post_title}
   ```

2. Enter title to search and Parse data

```bash
   npm start CHELSEA CENTRAL PHARMACY
```

3. Output

   ```bash
   [
   {
    directory_category: 'beach;rain',
    content_children_count: 'directory_listing_review|0;directory_listing_lead|0',
    directory_contact__email: '',
    directory_contact__fax: '',
    directory_contact__mobile: '',
    directory_contact__phone: '03 9772 2344',
    directory_contact__website: 'https://www.healthdirect.gov.au/',
    content_post_id: '20844',
    content_post_slug: 'chelsea-central-pharmacy',
    content_body: '',
    directory_location__street: '425 NEPEAN HIGHWAY',
    directory_location__city: 'Chelsea',
    directory_location__country: 'AU',
    directory_location__address: '425 NEPEAN HIGHWAY CHELSEA  VIC 3196',
    directory_location__lat: '-38.053543',
    directory_location__lng: '145.116259',
    directory_location__zip: '3196',
    directory_location__state: 'Victoria',
    directory_social__facebook: '',
    directory_social__googleplus: '',
    directory_social__twitter: '',
    content_post_status: 'trashed',
    content_post_title: 'CHELSEA CENTRAL PHARMACY'
   },
   {
    directory_category: 'beach;rain',
    content_children_count: 'directory_listing_review|0;directory_listing_lead|0',
    directory_contact__email: '',
    directory_contact__fax: '',
    directory_contact__mobile: '',
    directory_contact__phone: '03 9772 2344',
    directory_contact__website: 'https://www.healthdirect.gov.au/',
    content_post_id: '21963',
    content_post_slug: 'chelsea-central-pharmacy-1',
    content_body: '',
    directory_location__street: '425 NEPEAN HIGHWAY',
    directory_location__city: 'Chelsea',
    directory_location__country: 'AU',
    directory_location__address: '425 NEPEAN HIGHWAY CHELSEA  VIC 3196',
    directory_location__lat: '-38.053543',
    directory_location__lng: '145.116259',
    directory_location__zip: '3196',
    directory_location__state: 'Victoria',
    directory_social__facebook: '',
    directory_social__googleplus: '',
    directory_social__twitter: '',
    content_post_status: 'Published',
    content_post_title: 'CHELSEA CENTRAL PHARMACY'
   }
   ]

   ```
