function Showroom() {

  return (
    <>
    
    <h1 className = "text-4xl text-center font-bold mt-20">
      Where is your showroom located?
    </h1>

    <p className = "text-center mt-10 ml-10 mr-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, dui eget porta eleifend, purus purus vulputate nisi, sed varius nisi odio sed enim. Quisque venenatis leo ut neque pulvinar, quis dignissim elit pharetra. Morbi a consectetur felis. Praesent vitae viverra lacus. Sed pellentesque nec nisl sit amet tempus. Aenean porttitor, risus id mattis placerat,</p>

<center>
    <div className="max-w-200 h-96 mt-10">
      <iframe className="w-full h-full"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=greenbelt%203%20alveo%20showroom+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
    </div>
</center>

    </>
  )
}

export default Showroom
