const ExternalLink = (props: React.HTMLProps<HTMLAnchorElement>) => (
  <a rel="noreferrer noopener" target="_blank" {...props}>
    {props.children}
  </a>
);

export default ExternalLink;
