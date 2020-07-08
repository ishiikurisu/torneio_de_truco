const PARTICIPANTS_HTML = `
<form>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <input type="text" name="" class="participantname" value=""><br>
    <button type="button" name="button" id="tournament_generator">Gerar torneio</button>
</form>
`;

function setupParticipantsList(contentId) {
    document.getElementById(contentId).innerHTML = PARTICIPANTS_HTML;
    document.getElementById('tournament_generator').addEventListener('click', function() {
        let inputNames = document.getElementsByClassName('participantname');
        let participants = [];
        for (var i = 0; i < inputNames.length; i++) {
            participants.push(inputNames[i].value);
        }
        setupTournamentBrackets(contentId, participants);
    });
}
