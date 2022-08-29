function ContactItemBody({ name, tag }) {
  return (
    <div className="contact-item__body">
      <h2 className="contact-item__title">{name}</h2>
      <p className="contact-item__username">@{tag}</p>
    </div>
  );
}

export default ContactItemBody;