# I HAVE A STREAM

I Have A Stream is a web application that allows you to see all the music streams currently live, as well as upcoming streams. It gives you a centralized overview of all streams for an easier switiching between them. 

Livestream can be coming from facebook, twitch. Able to add others upon request.

## User flow 

Start with a page where you can see the current livestrams happening. Facebook iframe and Twitch Embeded player are delfault muted. 
Below a combine list of uncoming streams - the ones starting shortly.

Think three revolving pages + add stream at the top.


Stream page  ---   First page   ---    Cronological List (  ---   Stream page)

#### Individual stream page 

**question** Should an upcoming stream have the option to be viewed on an invividual page? 
- Yes. There should be time of the stream (countdown timer), description, link to the stream, photo
As soon as the stream starts the iframe should be displayed instead of the photo.
**questtion** Can you trigger the iframe to start displaying when the timer hits 0? 

Title of the stream, large video player.
Where to place description??
Below are `also happening now``

## Add a new stream 

Make a submision with title, time and link to the stream. Manually added for startig points.
Optional description. 

One page/channel can have more than one stream, with different time. 

## UI components : 

* Countdown Timer until it starts
* Stream description 


## Resources

Facebook 
* [embedded video player](https://developers.facebook.com/docs/plugins/embedded-video-player/)
* [video from page](https://developers.facebook.com/docs/graph-api/reference/page/videos/)

[TwitchTV](https://dev.twitch.tv/docs/embed/everything)
