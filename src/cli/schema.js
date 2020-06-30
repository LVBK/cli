export const description = 'Manages CMS schemas.';
export const command = 'schema <command>';
export const builder = page => {
  return page
    .commandDir('schema')
    .usage(`shoutem ${command}\n\n${description}`)
    .strict();
};
