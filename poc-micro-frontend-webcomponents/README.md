## RUN BUILD
ng build --prod --project administrative --single-bundle --output-hashing none && ng build --prod --project financial --single-bundle --output-hashing none

## RUN SERVER
npx live-server ./dist
