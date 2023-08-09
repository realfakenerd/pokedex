import { clientsClaim } from 'workbox-core';
import { pageCache, imageCache, staticResourceCache } from 'workbox-recipes';
self.__WB_DISABLE_DEV_LOGS = true;
clientsClaim();

imageCache();

pageCache();

staticResourceCache();