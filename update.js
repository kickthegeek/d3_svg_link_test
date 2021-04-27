


console.log("runnnnn updates ");

data = ["chamber 1 ","chamber 2 ","chamber 3 ","chamber 4 ","chamber 5 ","chamber 6 ","chamber 7 "];
$(window).on("load", function(){

           
 
Init();
});

    

function Init(){
    //console.log("init() ..........");
    // d3.selectAll('g').on("mouseover", function(){
    //     //d3.select(this)
    //     console.log("on map")
    // })
    // .on("mouseout", function(){d3.select(this)
    //     .style("fill", "white")
    //     .transition()                      
    //     .duration(1000)
    //     .attr("r", 14);}).each(function(d,x,e){
    //     console.log("sentering map ", x,e);
    // });
    var tooltip = d3.select("body")
    .append("div")
    .attr('class','tooltipdiv')
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden");
    
    
    

    var rects = d3.selectAll("rect");
    console.log("rects ",rects);
    
    
   rects.data(data).on("mouseover", function(d){

    d3.select(this).classed('hovernode', true)
    return tooltip.style("visibility", "visible").text(d);
    })
    .on("mousemove", function(){
        return tooltip.style("top",(d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    })
    .on("mouseout", function(){
    d3.select(this).classed('hovernode', false);
    d3.selectAll(".popup").remove();
    d3.selectAll(".tooltipdiv").text("").style("opacity",0.75);
    return tooltip.style("visibility", "hidden");}
    
    ).on("click",function(d){
        d3.selectAll(".tooltipdiv").text("").style("opacity",1);
        d3.selectAll(".popup").remove();
        d3.selectAll(".tooltipdiv").append("div").attr("class","popup").attr();
        d3.selectAll(".popup").append("h2").text(d);
        console.log("adding a div to this window");
    });

};