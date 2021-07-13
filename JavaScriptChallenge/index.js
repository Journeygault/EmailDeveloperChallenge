
window.onload = function (){
    // VARIABLES
    var language = "";
    var englishButton= document.getElementById('english');
    var frenchButton= document.getElementById('french');
    var display= document.getElementById('display');
    var history = document.getElementById('history')
    // EVENT LISTENERS
    englishButton.onclick = englishDisplay;
    frenchButton.onclick = frenchDisplay;
    // FUNCTION FOR ENGLISH BUTTON
    function englishDisplay (){
        language = "English"
        display.innerHTML =language
        history.innerHTML ="Canadian English is by and large the outcome of the two earliest settlement waves. The first wave was a direct result of the American Revolution in 1776, with about ten thousand so-called United Empire Loyalists fleeing the territory of the newly-founded United States. The Loyalists were New World dwellers who preferred to remain British subjects in what was to become Canada. They came from the mid-Atlantic states, Pennsylvania, New Jersey, upstate New York, on the one hand and New England on the other hand. This wave, peaking in the mid 1780s, settled the province of Upper Canada, now Ontario and their speech patterns are responsible for the general make-up of Canadian English today (that is, the notion of the ‘founder principle’), including its more ‘American’ than British twang."
        +"<br>"+
        "The second wave started in 1815 at the end of the Napoleonic wars and, until 1867 when Canada gained considerable independence from Britain (a process known as Confederation), was responsible for over a million immigrants from England, Scotland, Wales, and importantly, Ireland. There is some dispute as to the degree of influence of this wave, which was much larger than the first one. However, existing studies strongly suggest that the first (American) wave was most influential in everything but one area of language: that is, language attitudes—the evaluation of linguistic items as more or less ‘desirable’ and interference with consciously accessible language features."
    }
    // FUNCTION FOR FRENCH BUTTON
    function frenchDisplay (){
        language = "French"
        display.innerHTML = language
        history.innerHTML ="The late 1960s and the two decades that followed marked a turning point in the history of francophones in Canada. During this period, the francophones of Québec regained control of their linguistic destiny by enacting a number of laws, including, in 1977, the Charte de la langue française (Charter of the French Language, commonly known as Bill 101), which made French Québec’s only official language. This statute gives francophones the right to communicate in French at work, notably in the economic sectors where English once predominated. It also requires that French clearly predominate in public signage and that immigrants send their children to French-language schools (see also Québec Language Policy)."
    } 
}
// Text Sources:
//https://www.lexico.com/grammar/the-development-of-canadian-english-through-settlement
//https://www.thecanadianencyclopedia.ca/en/article/french-language