
function initMap() {
    var uluru = {lat: -23.693182, lng: -49.827264};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}




<!-- minified snippet to load TalkJS without delaying your page -->

(function(t,a,l,k,j,s){
    s=a.createElement('script');s.async=1;s.src="https://cdn.talkjs.com/talk.js";a.head.appendChild(s)
    ;k=t.Promise;t.Talk={v:1,ready:{then:function(f){if(k)return new k(function(r,e){l.push([f,r,e])});l
                .push([f])},catch:function(){return k&&new k()},c:l}};})(window,document,[]);


Talk.ready.then(function() {
    var me = new Talk.User({
        id: "123456",
        name: "X Find",
        email: "sites.xfind@gmail.com",
        photoUrl: "assets/img/xfind.jpg",
        welcomeMessage: "Oi, tudo bem? Em que podemos ajudar?"
    });
    window.talkSession = new Talk.Session({
        appId: "tQEIzMQ1",
        me: me
    });
    var other = new Talk.User({
        id: "654321",
        name: "X Find",
        email: "sites.xfind@gmail.com",
        photoUrl: "assets/img/xfind.jpg",
        welcomeMessage: "Olá, Como podemos ajudar?"
    });

    var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))
    conversation.setParticipant(me);
    conversation.setParticipant(other);
    var inbox = talkSession.createInbox({selected: conversation});
    inbox.mount(document.getElementById("talkjs-container"));
});
