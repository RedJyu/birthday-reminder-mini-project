function Person({ image, name, age }) {
  return (
    <article className='person'>
      <img src={image} alt='person' className='img' />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
}
export default Person;
