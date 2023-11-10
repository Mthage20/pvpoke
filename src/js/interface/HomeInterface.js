/*
* Interface functionality for move list and explorer
*/

var InterfaceMaster = (function () {
    var instance;

    function createInstance() {


        var object = new interfaceObject();

		function interfaceObject(){

			var self = this;
			var gm = GameMaster.getInstance();
			var rss = RSS.getInstance(displayFeed);
			var feed;

			this.init = function(){

			};

			function displayFeed(xml){
				feed = rss.feedToObjects(xml);
				console.log(feed);
			}

			$("button.feed-expand").click(function(e){
				$(".feed-container").toggleClass("expanded");
			});

		}

        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
