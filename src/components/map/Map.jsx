const Map = () => {
  return (
    <div className='map bg_map'>
      <section>
        <h1>Our Location</h1>
      </section>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.490474711481!2d3.4646!3d6.4369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf70b9ef6e7b1%3A0xc9b3e45d4b1dcd90!2sAkinyemi%20Ave%2C%20Lekki%20Phase%201%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1692893725067!5m2!1sen!2sng'
        width='100%'
        height='400'
        style={{ border: 0 }}
        allowFullScreen=''
        aria-hidden='false'
        tabIndex='0'
      ></iframe>
    </div>
  );
};

export default Map;
