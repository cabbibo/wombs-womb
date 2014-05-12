
  var _         = require( 'underscore'             );
  var THREE     = require( 'three'                  );
  var Component = require( 'wombs-three-component'  );


  var mutation = {}

  mutation.recreate = function( params ){

    this.params = _.defaults( params || {} , {


    });

  }
  Womb.prototype = _.extend( 
    Component.prototype,
    mutation
  );


  function Womb(){

    var scene = new THREE.Scene();

    Component.call( this , scene ); 

  }


  var womb = Womb();

