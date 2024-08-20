https://www.creative-tim.com/twcomponents/component/twiiter-clone-layout



CREATE TABLE users (
  uuid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  bio VARCHAR(255),
  showcase_url VARCHAR(128),
  profile_pic VARCHAR(512),
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);