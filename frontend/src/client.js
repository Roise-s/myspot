import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const proId = import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID;
const justToken = import.meta.env.VITE_REACT_APP_SANITY_TOKEN;

export const client = sanityClient({
    projectId: proId,
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: justToken,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);