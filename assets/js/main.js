
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




function checkmail() {

    var email = document.getElementById('signuptop');
    if(email.value=='')
    {
        $('.cst-error').text('enter  email').show().addClass('cst-danger').removeClass('cst-success');
        return false;
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        $('.cst-error').text('E-mail inválido!').show().addClass('cst-danger').removeClass('cst-success');

        email.focus;
        return false;
    }
    else{
        $('.cst-error').text('Sucesso!').show().addClass('cst-success').removeClass('cst-danger');
    }
}


<!-- minified snippet to load TalkJS without delaying your page -->

(function(t,a,l,k,j,s){
    s=a.createElement('script');s.async=1;s.src="https://cdn.talkjs.com/talk.js";a.head.appendChild(s)
    ;k=t.Promise;t.Talk={v:1,ready:{then:function(f){if(k)return new k(function(r,e){l.push([f,r,e])});l
                .push([f])},catch:function(){return k&&new k()},c:l}};})(window,document,[]);


<!-- TalkJS initialization code, which we'll customize in the next steps -->

Talk.ready.then(function() {
    var me = new Talk.User({
        id: "123456",
        name: "Alice",
        email: "alice@example.com",
        photoUrl: "https://demo.talkjs.com/img/alice.jpg",
        welcomeMessage: "Hey there! How are you? :-)"
    });
    window.talkSession = new Talk.Session({
        appId: "tQEIzMQ1",
        me: me
    });
    var other = new Talk.User({
        id: "654321",
        name: "Sebastian",
        email: "Sebastian@example.com",
        photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hey, how can I help?"
    });

    var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))
    conversation.setParticipant(me);
    conversation.setParticipant(other);
    var inbox = talkSession.createInbox({selected: conversation});
    inbox.mount(document.getElementById("talkjs-container"));
});
