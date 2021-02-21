const ExternalLink = (props: React.HTMLProps<HTMLAnchorElement> & { children: React.ReactChild }) => (
  <a rel="noreferrer noopener" target="_blank" {...props}>
    {props.children}
  </a>
);

export default ExternalLink;
