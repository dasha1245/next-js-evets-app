import css from './EventContent.module.css';

function EventContent(props) {
  return (
    <section className={css.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
