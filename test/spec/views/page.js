/*global describe, it */
'use strict';

(function () {


    define (['jquery', 'views/page', 'models/page'], function($, PageView, PageModel){

        describe('Model : Page', function () {

            afterEach(function(){
                
            });

            beforeEach(function(){

                if (this.view) {
                    this.view.remove();
                }
                $('body').append('<div id="sandbox"></div>');

                
                this.view = new PageView({

                    model   : new PageModel(),
                    el      : $('#sandbox')

                });

                this.view.render();

            });


            it('should be defined', function(){
                expect(this.view).toBeDefined();
            });

            describe('shold render certain stuff', function(){

                
                    it('should render h1 as allo allo', function(){
                        expect( $('h1').text() ).toEqual("'Allo, 'Allo!");
                    });


                    it('should render h2 ', function(){
                        expect( $('h2').text() ).not.toEqual('');
                    });
                

            });



        });



    });




    

})();
