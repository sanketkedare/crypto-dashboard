import React from "react";
// Navbar Component

const Navbar = () => 
{
  return (
    <div className="h-[50px] shadow-lg w-full flex items-center lg:justify-between justify-between md:justify-around lg:px-10 px-2 cursor-pointer rounded-b-xl hover:bg-slate-200">
      <div className="flex gap-2 items-center">
        <img
          src="https://images.vexels.com/media/users/3/144837/isolated/preview/40f189daa5c0279718484ca5f5569f78-crypto-icon.png"
          alt="logo"
          className="h-[30px]"
        />
        <h1 className="uppercase lg:text-[1vw] text-[13px] font-bold">
          CryptoCurrency Dashboard
        </h1>
      </div>
      <div className="flex gap-4 items-center">

        <a href="https://www.linkedin.com/in/sanket-kedare-5820401bb/">
        <img
          alt="Linkedin"
          className="rounded-xl w-[25px]"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAe7X///8AcbDi6/MAd7N9rM4Ac7G70eStyN/I2ukAebQAdbI5j79Unsjo8vjM4u7Y6fIfiLy00uWew9sHfrZvqs52qc3T5O+ly+FvpMpopcuMudcUg7qny+Hg7/ZDlMKAtNTw9/u92eljoMiTuNWBttWUwNukw9s5k8K61+jZwmoZAAAEoUlEQVR4nO2dbVvbIBSGgTJUSGjStNtsrX1x69b//weXtNMaDVR30YOePfcXP5RcF7e8JhxAyEeqpqynggV12VRPXuLv30mhnM6ds2Rop4pJz9CXxubOVWKsKf3JcCz4FN8JLcaPhmPFrQCPWDU+GnrBU7BVFP5gWHKsokd02RlOTO58XBA1aQ0LrnW0wxZSVCp3Li6KqkTjcmfiorhGMO5nOnQp6tx5uDC1YDLZBgAAAAAAAAAAAAAAAADAf43VRrUYx3SJ1Ro9b8YjX00WhWK4BmnN3fIprkrez/gFHLmd7FGteMU72GO0UY81p3gAa6tXgqwUrXtdgh1zNhEBZjEoKDd3XLqb6bCgZBNdZb6HDCWPQrR2EzRsWBSifggKSs+iO3051verae7cpUBtI4Ylh4aoRhHDrxyGxKjhFw6G5lvEkMW0xiwjhizijd06Yqg5GNoiLLhlMeILNfTqxKgZtpOaeUiQx5RGRAqRSRG2hRhoiXserbDDDdbTikM/+oiZDQhOORkKU25eVlFuG+DctPem7+d82uATRuzuj3qb7Vxx6UX7OHW3ur19KDRTvwNaa2uZNUAAwEfgsLQdoN+pukjKF6vG1radlnPmiOs6MEKlPub6JszDc0X3I5JycVK01hlRr+Y/d8ur9perSbOYlYU1uc7pePu3NnMVSXn9OAlqTcrd2L9K4G8WqzzxAWkNtSqWm2Aiv5tmCBBIaWhNMbzYemJfk894Uxrq5oxfR0N98EpCQ32uAI/4grY5JjO0JvzR7gUz0pqazNBMIj+/YEGpmMpQlW8XlPInoWIywzfX0QMlXVtMZbh6l6CUNdnAmMjw1zta4YExWZBnKsPNOw3lmqqeJjKMRQMMs6F63Uhk+A/siPrTfIYbovXXfIZyTTNBzWhY0VTTjIZyRVKIOQ1p+pqchhXJkJjTkGbqltVwRtEQsxpOKKppVkOS8SKrIUlYWV7D3wQNMa8hxStUckO/XTZNs9zfvyXxkqAhpjWs1nW3R7NbdVJ3X89/P90ShM6lNPRz87zrcKo8V5AUwYEJDV8flK71uc83n6qWDh6UrmJB1pJkR0cyQz8YCGfPfEcliCRPZjgb7vhjUdaSZM9KKsP7UIsy0c9wBHtWUhkuQmO3ji5oEAz5qQzDr3rTzb/8Yz6c4SY8sKnYrpzdpzEchwe2yCZVKb9/GsPInmEX2El97rkPZngdMfwSeY5gQ8DlDXXMkGDqndlwzN7wG/taSnDhSGbDEQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMKwj7kZBfG3z7druV/hlKMf4V129taHn7sh2CYbO0e4vx8tdo5wbBuhjTzH8Px+AAAAAAAAAAAAAAAAAAAAAAAA4ESdOwMXphYl46vfRXcqsWiy3LlLhmsEwVGLOVGVoDjlPB+2kILiZN58mH1rKBn3Nd3p562hF1zrqRX+YDh8DQMDrOouPekMB67S4IAWh1tdDobSl+yK0ZrSy5OhlJNCOT4FqZ0q9n/NxFP0bdWUXOaoddmcbjr5A5XhWJeQSJXvAAAAAElFTkSuQmCC"
        /></a>
        <img
          src="https://miro.medium.com/v2/resize:fit:1024/1*xdqGZUH6zp2EOsjN-bEHlg.png"
          alt="Almabeter"
          className="lg:h-[25px] h-[20px] p-1 my-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
