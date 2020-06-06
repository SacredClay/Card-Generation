var face = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
var suit = ["Diamonds", "Hearts", "Spades", "Clubs"];
var deck = [];

window.onload = load;

function getDeck() {
	for ( var i = 0; i < face.length; i++ ) {
		for (var j = 0; j < suit.length; j++) {
			 var card = {
				 Value: face[i],
				 Suit: suit[j]
			 };
				deck.push(card);
		}
	}
return deck;
}

function shuffle() {
	for(var  k = 0; k < 250; k++) {
		var card1 = Math.floor(Math.random() * deck.length);
		var card2 = Math.floor(Math.random() * deck.length);
		var tmp = deck[card1];
		
		deck[card1] = deck[card2];
		deck[card2] = tmp;
	}
	
}

function renderDeck(){
	for(var x = 0; x < deck.length; x++) {
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = getCardUi(deck[x]);
		card.className = "card";
		value.className = "value";
		card.appendChild(value);
		card.appendChild(suit);
		document.getElementById("deck").appendChild(card);
	}
}

function getCardUi(card) {
	var iconArea = document.createElement("div");
	
	var icon = '';
		if (card.Suit == "Spades")
			icon="&spades;";
		else if (card.Suit == "Hearts")
			icon="&#9829";
		else if (card.Suit == "Clubs")
			icon="&#9827";
		else
			icon="&#9830";
		iconArea.innerHTML = card.Value + "    " + icon;
		//I added more space :D 
		return iconArea;
}
	
function load() {
	deck = getDeck();
	shuffle();
	renderDeck();
} 