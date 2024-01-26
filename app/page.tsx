import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="dark:bg-gray-800">
        <header className="flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900">
          <img
            src="https://www.reshot.com/preview-assets/icons/KGBY5R3WQ4/home-rent-KGBY5R3WQ4.svg"
            alt="Your Image Alt Text"
            className=""
          />
          <h3 className="text-xl font-semibold text-white">Leta House Rent</h3>
          <div className="space-x-4">
            <Link href="/login/" className="text-sm text-white">
              Login
            </Link>
            <Link href="/register/" className="text-sm text-white">
              Register
            </Link>
          </div>
        </header>
        <section id="home" className="dark:bg-gray-900">
          <section className="wrapper">
            <section className="spotlight">
              <div className="all-posts">
                <div className="post-section">
                  <ul className="posts">
                    <li>
                                    <a href="/1" className="music">
                                        <div className="blog-image">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9XftlvFjm3go9h6tMksX1ckrgWpZ4Kf3M5ugB25TjqQ&s" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            <div className="date">
                                            </div>
                                            <h3 className="head">Individual Modern House</h3>
                                            <h4>$1,450</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/2" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            <div className="date">
                                            </div>
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/3" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            <div className="date">
                                            </div>
                                            <h3 className="head">House Near Kochi</h3>
                                            <h4>$1,550</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/4" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/view-3d-house-model_23-2150761166.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            <div className="date">
                                            </div>
                                            <h3 className="head">House near Mannanthala</h3>
                                            <h4>$1,000</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/5" className="music">
                                        <div className="blog-image">
                                            <img src="data:image/jpeg;base64,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" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            <div className="date">
                                            </div>
                                            <h3 className="head">house near Vatappra</h3>
                                            <h4>$3,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                               
                                
                                <li>
                                    <a href="/6" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/premium-photo/modern-house-with-sky_35076-483.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/7" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-psd/luxury-beach-house-generative-ai_587448-1929.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/8" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/9" className="music">
                                        <div className="blog-image">
                                            <img src="data:image/jpeg;base64,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" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/10" className="music">
                                        <div className="blog-image">
                                            <img src="data:image/jpeg;base64,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" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/11" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799681.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/12" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/premium-photo/house-thailand-with-car-parked-front-it_859992-13.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/13" className="music">
                                        <div className="blog-image">
                                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBBQMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABLEAABAwMCAwQGBQYLBwUAAAABAAIDBAUREiEGMUETIlFhBxQycYGhFZGxwdEjM0JikpMWJENFUlVjgsLS4TVTcrLi8PEmRHOEov/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAAmEQACAgIBBAIDAQEBAAAAAAAAAQIRAxIhBBMxQSJRBTJhFIEV/9oADAMBAAIRAxEAPwDXhqUG46I8os+a9CyaSQrARHkka0ob80KodP6CyMo9sonAdElcdYbmhR5Gp8gpOklNGVCSVkUhFgqSY0gsPgqqRGUWIaSlB5B2wjEZ9yBYR5ruAcjjJ9u8Afgl5Y8ezg+SYDCeiWxpBz8krivKKLI1wxEzAM4UchTXgu6JAiymjKkJNW+CJpKGgqb2GERjATbi9siiIdThHgN5DCce3KRgrvJ3gLKIkYQIKSWlGjnJidOUbWOzk8keCnGucBgDK52BV7A2MnfGyWBp5hGHyEYI2RHUeiS37K8egjgokMO6hDBRAw+SPPkkbo0RRYKBwkElESUKOsUgm8lBGgbFlgItk7I0MTWlZUzS41wDDSlbYwiDCj7MoNjRv6C0g9URZhGWOH/lG1riV1r7Gq/Qnl0RtIz3gU4BjmErbwQchtRJYMZSC0ZThKNgHvXJsEkmM6WjogDjYNCliMO6JbYB4I7ok4v0Q9JPJoCMRE9FPEHklCHyXd0DiyuMJShFhWHYnwSTCfBd3AakIsTL2FWDoU26JFTOaK4xpBbhWBi8kg0pPJU3E1b8FeWotBPRTnUhG6SYsI9xB7b9kHsilCI+OFIe0pBaUbBrQ3pdy1YSXNI5uylkFJIXILoDQ0b9UHOSdO6IhMI5UDUiJR4RYTIRsGUWUeEMI2LYSCGEF1nWWrtQ5jKJqeMBHVBkfkvO3VHpKErFRMDtzsEssjH6SAGyQ8KV2y/CQeI+hGUDp8Qm9KHZkplER5GKdjHiiDc9E4yEp4ROxujskLUpDDWeSeZH4BOMi8QnmsxyCDyHaCGReSebElZ0DJIx58kkVER/lGftBIm2HgX2XmjEYCJssRI/KM3/AFgqq+cQ09uaYaXTUVRHLV3Gebj9yaKbdCSpEu6XKitFN29fKGMJw1oBc5x8mjcpyiqaa4UzamjmbJE7k4fZjofIriXEF/r7jPIbc19wqw7S+oAGln6rR9w+JJVhwtxJV0VXGyZhoax+xil/Nz4H2+fNaOzx55IOXJ2F0QTTofJVdu4jNdd46V0DIIjSOkkdI7cSBzRgdCMOJ+BVu+qpv9/F+2FL5J+BuCOYvJFoLeSddVU/+/h/bH4omzwPfobNE5x5BsgOU3P0FceCM5pTbo8qe6MY5Jl0a5MOzILoU06LCnOiKb7LfkqKQraIRj8kgsHVTzEOoTZjb4IqQNSCWDoklimOYOgTTmKikTcSNpRaU8WpBBTWI4iMBJITmCk6U1i0IKCUWoIgLsSfqow8Y5JCGk+IXk2j1lf2GZM7YRDdAN3TrWIpoD2EhqcZH5Jxkfknmsx0Qc0KosSxg8E4GpQb5JYb5JPPJS2hAYPBLDQBySg3yS9OQiibbMR6VbqbZwlUMifpmqyIWYODvzI9wXAnVdQ0d2onz/8AK78V1D0uS1l54kpLFbonTS08etzG8g53U+GAD9aq46OzcB07Ku5uZX3otzDCCMRHxH+Y/ALbjShAhJsi2Th2WnoxeOKq2eko2jUynfM5rpPDVvt5DmVU8Q8TTXcmltcZpKAbDGzpPwHkod2udfxFWGquc+Wgns4WnuR+7xPnzRRRsazAIG2OadWxGzZ8BUQdwxO8byCtILvHYKH6SaRsdBaS3IcS45GxUawcS1NjoZKemggljdIZD2hOxwB0Pkrj1Wv4yhgrLsyK32umBd2rScvHXTq+1N4QnsgcG3e43RslnrKP6QgbHnt3u09iP1neHhjfY+CY4h4OraOB9XZ6mWvp2A9qxjyXxEc8AHcD6wlXziQNpvoXhSB9LQN9uoa0h0rupb1/vc/BUvD9wuvDc/b24PdGSDJC9p0v/A+f2pdmuUMU3bSgbyScuZeVpPR1Uvh41tTnPcQ+UsOXE7FpV/UWazccwPq7QBbryBmWme3SJPE4/wAQWNkp7jYrk1szH0dZAdTDjcY6tPVUUlJC00z05uehRac/oledouO+Kne1fasfBn+VOO404pIIF/rMn/h/BRWFvlMpsj0G6JNOiKgcKXZty4bt1XNMztZIGmQveNWrrlWbp4Mfnov3gUvkuBuCO6IpsxJ99RAOc8P7wJh9XTj+Xi/eBcm/oDobdF5Jp0adbV0sjwxk8bnnYAPByfrTzmA74TbAaK90fkmyxT3MTD2KikI7Ipak6VILEnQn2EGNCNO6EaOwKJelABO6EoRryrZ6txEMTzEpkakRxIcnXEQxKLgASSABuSeifbEsV6Vb4bNw6aeCTFXW/kYz1a39J31fMroxt0K5JHMeMeL7hceI6qa219TT0rD2UTYn4BA2z8VVM4hvv9b1n71VjIwAAA0AdAn2s26/BenGKSSM7lZYfwhvmCfpes/elXXDsXFfEMpdFdKyGijOmWqdIdIPPA8XfYswI9+R+Kdp7hW0VNPSwzyspan89C12GvPj+PjldJC3ZuKq+09umNFw+yStqHuAqq9x1OJ5HvHmfkOifoWUseqWa2isnecyGVg1OPm4lK4Us0B4foZtLdckeo90c8rUTx1NPBRspDExvZZdmNh8fEKeTJDDj2mCMZTlrEq45aWNjXutFO53MxtiaPhnP3IPrKeGHtpbTTHSMljYRk+Wc/ctNZIZqgS+tPZIQRjDGj39E9d7dEbZVMIA1xubsGg7gqGPrcWRpR9jz6ecVyZGofR0VCKriGmpKVrvYo44xrcf6J8fcPiqt12qr1I3VSuhpWfm6cFpbjpnZMmwPrOIaarqaiomLWFo7V+oNAbsB0C1VroxFUwBrtg4YwB+C2pebM9+CPTVMvZhzqZkWBgNY1hH1kdeadbW1Dt308cbeTdIYR78kJqS4Xl18q6YVbmQMkIi7jBkAnb2Vq6eOoNJE50zi7QMnI3PisMuvxbOK9GtdJkq2YutdUyPD+wjh047N0RaHZ8c4+Q2Uetrrbdqc0XFdOyJoIbDXBwy0nYZPQ/JbO7xO9Wg1uy7Ufax+CwnpJpmjhKpcOfaxcvN48lpjJThsjO04y1ZieKeFJ+G6qMPnjqKWfJgmad3Y8R8eY2VSxqU6aWcQNke97IIhFGCc6QOidYxUizmhsBIeCepUox/8SbdGqoRogyN8Uw9o8Ap0jMKK9u/LKNsWg7bVvttwp66nGJKeQSDHXHT48l6atdXHc7fT1tOQ6KeNsjT5ELzARg+yPiuseiLiiKK3/Q1S2R8jKlrafS3PdfkkZ8iD8CFDqP12+imN+jqBjONwPgmHxqydFjqT5lMOiWVTHcSuMaLs1NMSrrhdbfbtqqpY2Q+zG3vPd7mjdN3ALHYvQgsvceMpKaUCOjo6eM7t+kawQvcPENHRBDujdlm4AS2tSgzyS2sJ5BZLNIGNT7G4TbYz4p0AAZOULOoM90ZK88cfXv+EPElRPG/VSwHsafzaDu74n5YXWfSbfDZeGZI6eXTWV2aeE53aMd9/wAG8vMhcJa1uAACMbLZ00L+Qk3QhsafazyKNrdk61vktdGdsQWbJiRgKmaNuSadGCdzhBoKZ1nhCP8A9LW3f+SH2laKZncp9x+ZHTzK5jbOOJ7XboKGK2RTMgZoa90xBPwwcKY30oVjWhv0NT7bbzH/ACrP1PT9/G4WHFk7c9jqNpbhr8b8uSduTSaKXY50O+wrk59KNdnaz048+3/6UJPShUOY4G0RHIx+f/6Vkwfj+y1z4LZOpc7deTVshJq4iQds8/crGljIq4cgjvDouf0HpDjfWM9etwp6fScyRO1uzjYacBXMXpCsEcrHB9TkHpSuXpuzHRoLm8G7QtDeTSM/3ir2GeKOmj1uGdCw59IXDUju0fBO54ydRpznf4J0ekewYAMVWQBgfxf/AEXgS/GdQm3Bq2z0/wDXDVRafBrbjiSliexpPePMLEek6PHB05/tof8AnCky+kSyTNawsrGsb0ECo+MeKLberDNQ0TKrt3vY5rpIg0YByd8r2MEJQxxjLyYZO5trwc5p28lNYE1HEWO0k5KlNbgK6OYnSm3jGd+ifLSduq2Vi4LjjpfpfiyVtJb2Yc2F50uf4EjoPADc+SdukJRnuGeEq3iKYPYHQUTfbqXjbHg3xK174+GKOEWA218tA4flq3TkCToS7n8RsoN04olutVTUVBH9H2VksYLRhpkaHDOroG46Z9/gtS6SwtmEwutv09GmojGNsf0vd9Sm5NnUct4q4Kq7MDVW9zq22v8AZlZu5gP9LHTzT3Ct0PDtVb67snMLJWx1LGDJcwjDz5nBzjxAU+xXe52W5VXYyRVdpfUyaoJJNmNLzgtdgjl7wUV6is9ZVxutMWiOoJd2BOCX9cb7BYepzp1FfY0eHZ3gaXtDmkFpGQRyIROZlZH0UXeS5cKx0tWXittp9Wna8YcAPZJHPlt/dWzIykk2nyXSsp71bZbhSGGCqlp355xnGryJ5/Uuc8V8O3i2QxPpLhT0tPNM2OUwxkSbnmZHEk/JdcLVkvSawfwbadPKoZv9aFjwXNHJKThu1OLn3OvmdK4A9owF5ccnmT5aUFYSulY1gIaBjbogmUpF9Inby9rGlzuQGTt0VXW36lpuw/KRx9ocgyndzQM7N5pd0qKk0wZRteXyEDUD7O/u8PJco4k4gkpuJaCB7ITPBPiVpe5rd8e0dtiVBwkctTsFqu9PcI4HQyCQSwtlY9o7rm4G/lvlWZdkclxX0fXeGaWSnZHO2WOpE7pWSHs4WBwaxpBGze8T9uF2aX8pTvYXFuWEahz5dEIp3yLKjgvpLv7L1xJLoePV6TMEXe54PePxPyAWUZIw8nfNde424ZpLBY4Kq1QQSVMlQ1jzUwMeNJY4nkOeQFT1jaK0tp3XN9pp+3jD2k24Y3HjlepjyJQoyz5ZgmPGOYTrSPELbxXnh8NyLjZdueKEfipkd3soZqbX2rGOYof9U6yolozAam4xkJ+mt9bUR9rT0dRLGeT2ROcDjbmAtyb9ZGc7laATyzSAferKzXD6TbLFaLhTSwNidkQR6A3OcEEHx+xc8wdfs5z9D3Mj/ZtYf/rv/BF9B3Q/zbV/uXfguoUdlqZpS2ouVxwGk6G1JBHh1VTLXcPMe5j77dw5pwR20mcoLK36O1SML9A3Qja3Vf7lySeHrof5uqv3RW49f4cdL2Qvl2MmnVo7eTVjxx4Jp904WaSHcQ3EEZBBqn9OfVd3P4HUxR4euv8AV1T+7KMcPXXH+zKn92txDXcNzAdlervJkZGmaQ5+aI13DW5N4u/X+Wk/Fd3DtTFN4cu/P6Nqf2E63hy7/wBW1P7JWvjruGJNZjvF1fo9stqHnT78HZJZcuFCQBebkS7BH8afvnl+kg8r+jtTKDhq8f1bP+wnm8N3kfzbUfsrd2emst5FQbXcLlL2DSXu9afgHoOfkUUnD7jTk/SVc3oXicnTuklncFsNGGzpHN6qyXWOsc11uqwdjtE4/MKRTWW6zTsjjt9VqdgDVE5o+JPJdEZw/kkC6XaU45iQ7/8A6Rx2kwveHVVwe0s5VEpLTjccnZByOa87/wBrCl+rNX+Gb9jNn4ftfC3Z1F1LKu6P3jhaNTWeePvPwVhU+q3aVj7vSmoLcmJveLGHzH3pjhygpam7XCecVks4ZGHdrP2jW8z3c7/as3W3W+s4tqaCmnY2mZUujY0xNJDRyW1dRCWPuejM8M9tTWi32Rp7M2iMSeWrTj8U2+3WUnQLPGZPHDtOPf48lHppLpgdvMx+R4AY+Sn1VJVeqdqyr07DU3s2nHmsUfzPTOWsWy0ugypWzPX+CgpmOho7ZTxdowlz8O2H1rGVvY0vZzRU7IamFpD5Gbl7+hA5c8LQXuaYSOilqWTMh1NbpaM6COZxv4FZ0Ory6Noie6SoAEbY26nOd026Zx9vgsks3dybIzuDjwafgS/uZdJ5J610lylYwN7RoayeMDy6jGxXWLVcobnC50YLJGbSMP6J9/Vc34Q4aY+6SxV1BS1cdI9sRkLTI2NwJJAHMdNzst7d/X7dSE2WlgJfL3/yTnkZ/S0t5rfF3CmuR4Jlqds+SyHH9fbpLR6q+uphMJmv0GUZwM+CyvFl4npHxx36vuUrp86YKVsTBt0I1lwO/UZKyV1ippGRiK1VlHqBeyWWdmZRy5Af6owSbKSevJYTXe19oR6wDjGQ2MuwcDPzRrHzNge85ZsCcHVjPyQWjtkv9MjtXE99tsVC+ShnklrXRFsMUTXnVnlkDGMeIXEr1NV3D8vVQ5mc8tlnDMasbDI6Ld11yvRsdTcX11S9wk0BuBho1aTy3WOq5LhJQtpi1+iR5dhseDnrnxVJ4qGhl45HuCrnbKG4v+l/WBS62TBsRJDy05a0t5HcZyc43xzXYIPSJQGsZFUwvZTuGH1BeCWu5jLR035riNupA0EVFDNJvpDuyOAPx3Ct67Br5Y229+gOwe4QOm5WftvdBczpF64stnFMAoLdHOTTPbOZJGaQebcDO/XKpPSdSskitUb25YYiCPgFF4NfHLPVxihbC5kbczBuO076tPScMOtI/sifkFrSSSSIW2zD09oo9P5nOdz3jup7aKLsBBoHZYxgE8kICA0KQHNxzVFGIG2QjZ6J7ml0OdPLvnZbX0Z0sNK+uigYGxtYzA57Eu5rM6x08FqfR/PFTm6VE7gyKKOMueeQGXJZxWrAm7OlCKlDjop2aw0jUDkriz6SnqLk9z2bmYk7nmCunUnEVokqtMd0gkkf3Q1rxzPwXNGuIrpD4Su+1QwRcU7Kzq0SJLHSQVIqYoGiVrC1ry4nAO6qpLBQvkc98ALnOc45e7m4YPyWifLqb8FFcE8I/YZ/wrqa3Q0sfZwNc1mANJeS3YYG3uSorbTsk1thAec76j1/8qbhKaFSkTt2RqKz0tP2op4GtEpy/vE6tuuUU3DlsgjBZStGQBgPcNgcgKyg2PtI60h0YAyp18kUvguPRpSUlJNcY4oGMiEQeWDJBOT4/FXXFstNNw1cm0kPZlsBJcBjn1HmqDgmtgt0l0nqphFGGRNLj5lylcQcQWupsFxp4bkyWR1O7DSD9uFmzYnKfkaEuLoxFS7h1tmmbDUZrPVctPrs2oSaT0zzzhbGxNeaKyuLS8PtjC95330j8VxHtyGE5PsrvPD5YLDawyQaG0TGNzzPdACy/kekisfx9jdFnnkm34J9hhEdxuWBjU1n2FUzLa13FU9Q7G9UT9ZVtQ3GkpLhURVMuiWdwbGNJOSAT08lBlr4niW40LwWvd2kT3tIHkTtnCrgg/8APGP8KydZpMS5whnc3A7zyAp9dTQ1kHZSSOaBh2WOwQem481wm8cQXWrl7aqqn6w7c08mGZ8gPNa70a3y53arkoql5lgihBbIT7LsgbnzGrzXzmX8Pmxxc4cv6N0uphPiRcXSm11EWWvEpZ39TydYztjy8lSx0c0tzhip3BoOWxSatBb13I3A2Wz4jp3ztpuwy2sjb+V7LJaW5zz23WYmoyJXS/8At25Ikdlu4GcOGCfhj4rbiw5E1sjzclPwW1FxB/B+kqPVZmuMkWOzneTK+QZGsc+p5+5XMXFN6np6eOhpWA9iXSzTjOp2MYbvzz1Kx8dRQR32Ge2vkukjmlrzUQgMDictIHxP1LaMoL25rjNDbXzAgscQcRjwG3Jb47NyiJFKuTDekC5VVXNw7W3GCNsrahrcx7hw3+/Oye4jpKmemc7WwxUzdDWnu4BOcA+Ka9I8FVSvsLKmGnY4VY0iH2ev4p+91jqeoqYJxqZkO7o28srbjS8hk/izD11IXPBMT9H6ALsaeuNvegpU1S1tTKJYnHfO7z/34ILXwYHZ0GjtlLcOH5aGtOIXTvDsO0nZ5PNVNZaOFYpIfy75GmVrHNjmc4nIPQefVZetus1ts1kmfTCRtREHOe+Q/lCOf3fUtA2qs89upJnyR0pfIDmnYdQbg5JPhnCzTlKTdG+EYpITTxcLOpWYgrn9m/L8SPA1kN257q8l4WtDzJPHK0SSML9JqX+GeWVzq8Uckd6Z9F1NQbeSHZL8FvLOxO+SFqqYVd5LYrZbHShgDdYyAMDG5yk1m3dsf4fRobTY4LUZJox+Uma0Eid7wd88jyKi+lJ4EtoH9i7/AAqbUcPXi02c11TXETzPa00+nUGt58z7uio+ORVVH0YauVz5WxuwY2AbHHMeK04k1FWZ5pOVooYpAGhPNlHgozKSbYB0uT0LQpElsq42gyF7M8stCupEnBizK33fBX3DEg+heInEkAU7QcNyf0uizjbZUvPdld+yr2222vpLNdWwVUbi+NpnYY893DxjPx+SWc1QY45WRrI4G8UAcWSOFSzEo5HvDbw+aDpAK2bLf5V3IeZVdw5bqumulFLC950zNLtbTjOoKVNE4V0+qQ5MrjgDzU8U4spOEi2FSzRu131JPrEZGcO+pQQW4wJcn3Iu8dgT9SdNAaZYCojPR31JTZWeB/ZVbomGTtjzS4nah33OaUbFUWWbJoxzDvqRVEzXDYH9lQjkOw14I96J4ecDtmDPmEtqxtXRMzq4fu+x2MDvYz+k7p1WVjnHqVYHZy6NxJOnGfDGD8iFqqWGqZabiYnx98xDU7vDZx6BUFstdYKoNdIRA4uO0YaXeWT0UMmRJ2VhjbVGHY7LQN+Xgu7cIy54Ws5cdX8Uj3d7lmTNNCwhxpyGnGQW5HyUgXlkUEbWzVeoDBbGQG/DZZc/VrIkhsGOGJv5FvWh0t4ppAGkMqHHBG/sHlul2EMFnpY36XMEenkMEZPj0WXqrtK5plohK6oa/U0yyDY4wfkodDxBdaVscPqUhhZ3SGTjceSfFlx6JMORpztM177BYG18Ev0ZRx1G7m6IWjO3hy6q4ayCMYbFGGjlpa0YXNKy68S1VZTVEFHNiAkhrZMlw8NwFYjiDiZ43slS0dT252+SdZIrwD/puXFuNmjboGgKp4mdosVTJCWxy6mhr9AJGTvt7ll23rinW8m1VL4893EpOPqG6i3Stv1XbXtNFUQzmpYWMe527Wh2dyP1gueWNcCtf0nWSakma6Ss7R0xe0tdFHnSMHGMD7QugUlzoxG4GqBIA9vY8lxa4Udzruze2jZA9oxqbMVGFnvYONbz4Ykys+VOT2jJA7nx1N16TWzXGe0vt0RqGU83aSuj3DQP+yrG/wBG6pZ6zHF2gIdlw/onfouXzWq962mSnc5o3bqIPxCdjhv0GnQ6WNo27k7gB8AVTH+vMkcppcMTc9UNW5rnv5DGo426IJquq6p8jBUxSOkYwNLntJ1IK+0fsm1bIeplRD2MsQMcTe4Nb+7v70w64TxM0xuw0DGMnl9aCC7Gxkdt9GnBFluFrjuVxjlqp3/oyv7jdhyaAB165XUqaip6WHsoIwxgGzeg9yCCGTyMzMek13Z8Odo0bxzNxnz2+9cw46c5k1DpcR+T558gjQVsX6k2ZuOpm1au0dkDxTslbOGkajuM8yggqisl+uzQUUD4z3pcgk5JA8B4LSUrHU1jur45pdToI+bvZzqzhBBJkGgQrTd6j16GnayNrO0YDjVk7jfmm3PMlfM8gBxkduPeUEFHD5LZfBPNPE2IuDBnKjsGrn8kEFoZFC3sbpa0tB96cEEJgeTE0lvLyQQXIDIwhjeXgsAwTuFHqY2MmijA7rzgokFz8HI0XD8TI4rmxoIDTHjvHqXK64fsltlZPJLSRue52A7GNIx0xy9/NBBeZ1LextxL4nO7/N6lX1DIo2FrHkAOz1PvUN1Y8QF+hmccsnH2oILCvZkn+xAF1lwzEEIyPB34o/pSXvHsocg4zg/iggjFCklt2qWQB4Dc5A5uH2FLqOI66nia+Ps8kgb6j96CCdpHBxcV3LLXgxh2eY1D70up4uuskHavexzoy5ozqwQcc9/II0EEkFEH+F1wfGXmGlyP1Hf5k9S8TVsudUdOO70YfxRoJZJExDeKa8tBMdPjSdtJ/FFHxVV4P8WpMl2MkPP+JBBCkAmUt+qCzDaelYB4MO/1lBBBTs4//9k= " alt="Blog" className="musicimg" />
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/14" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004033.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/15" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/premium-photo/3d-rendering-modern-classNameic-house-with-luxury-garden_105762-111.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/16" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004055.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/17" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/premium-photo/3d-visualization-house-house-nature-with-beautiful-garden_727625-748.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/18" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150765.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/19" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799631.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/20" className="music">
                                        <div className="blog-image">
                                            <img src="data:image/jpeg;base64,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" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/21" className="music">
                                        <div className="blog-image">
                                            <img src="data:image/jpeg;base64,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" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/22" className="music">
                                        <div className="blog-image">
                                            <img src="data:image/jpeg;base64,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" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/23" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/house-with-garage-house-left-side_1340-32088.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/24" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/premium-photo/modern-cape-cod-house-with-sleek-exterior-minimalist-design-elements-large-windowsgenerative-ai_762026-16.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="/25" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/3d-view-house-model_23-2150761176.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="26" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/premium-photo/3d-rendering-individual-modern-house_21255-27.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="27" className="music">
                                        <div className="blog-image">
                                            <img src="https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?size=626&ext=jpg&ga=GA1.1.1117687879.1706206599&semt=sph" alt="Blog" className="musicimg"/>
                                        </div>
                                        <div className="details">
                                            
                                            <h3 className="head">RedStone Station</h3>
                                            <h4>$2,050</h4>

                                            <p className="description">Lorem ipsum dolor sit...
                                            </p>
                                        </div>
                                    </a>
                                    
                                </li>
                 </ul>
                </div>
              </div>
            </section>
            <div id="overlay" className="dark:bg-black"></div>
            <div id="close">
              <img src="{% static 'images/icons/close.svg' %}" alt="" />
            </div>
            <footer className="footer">
  <div className="container">
    <div className="grid grid-cols-2">
      <div>
        <h3>Hleta Private Limited</h3>
        <p className="address">#208, 2nd Floor,<br /> HiLITE Platino,<br /> Shankar Nagar Road, Maradu,<br /> Kakkanad,<br /> Kerala, India - 682304</p>
      </div>
      <div className="footer-links">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Places</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="grid grid-cols-1">
        <h3>Contact</h3>
        <p className="contact-info">
          <a href="tel:+918281176376">+91 828 1176 376</a> | <a href="mailto:hello@steyp.com">anusajesh5@gmail.com</a>
        </p>
      </div>
    </div>
    <div className="text-center">
      
      <p className="terms">
        <p className="copyright">© 2024, Hleta Private Limited. All rights reserved</p>
        <a href="#">Terms of Service</a> | <a href="/PrivacyPolicy">Privacy Policy</a>
        </p>
    </div>
  </div>
</footer>

          </section>
        </section>
      </section>
    </>
  );
};

export default Home;