import './Link.css';

export default function Link({src, children, newTab}) {
  const targetBlank = newTab ? '_blank' : '';
  return (
    <div>
      <a href={src} target={targetBlank}>{children}</a>
    </div>
  )
}