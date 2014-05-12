
  var _         = require( 'underscore'             );
  var THREE     = require( 'three'                  );
  var Component = require( 'wombs-three-component'  );

  var audioController = require( 'wombs-audio-controller' );

  var mutation = {}

  /*
  
     TODO:
     remakes everything with certain params,
     in order to be able to personalize womb
     ( size , fov , failure cases , require techs , etc );

  */
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


    
    var width = window.innerWidth;
    var height = window.innerHeight;
    var size = 100;


    var camera = new THREE.PerspectiveCamera( 40 , width / height , 1 , 1000 );
    camera.position.z = 100;
     
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width , height );

    document.body.style.margin = '0';
    document.body.appendChild( renderer.domElement );

    this.audioController = audioController;
    this.addComponent( audioController );


    /*

       TODO:

       - Events
       - Loading
       - Animator(?)
       - Interface

    */

    this.addToUpdateArray( function(){

      renderer.render( scene , camera );

    });

  }



  var womb = new Womb();

  module.exports = womb;
