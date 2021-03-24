const myInfos =  {
    nom : 'Pierre',
    camp : 'Lyon',
    ditSalut: function(){
        return `Bonjour, mon  est ${this.nom} et je  de ${this.camp}`;
    }
}

module.exports = myInfos.ditSalut;
