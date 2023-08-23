function breadcrumbDataNew(){
    var scriptbox2 = document.createElement("script");
    var home = "https://www.sunhouse.com.br/";
    var contador = $("div.breadcrumb_bs > ul > li > div > ul > li").length;
    var path1 = $("div.breadcrumb_bs > ul > li > div > ul > li:nth-child(2)").text();
    var path2 = $("div.breadcrumb_bs > ul > li > div > ul > li:nth-child(3)").text();
    var path3 = $("div.breadcrumb_bs > ul > li > div > ul > li:nth-child(4)").text();
    var path4 = $("div.breadcrumb_bs > ul > li > div > ul > li:nth-child(5)").text();
    switch(contador){
        case 5:
            var itemlist =[
                {
                    "@type" : "ListItem",
                    "position" : 1,
                    "name" : "Home",
                    "item": home
                },{
                    "@type" : "ListItem",
                    "position" : 2,
                    "name" : path1,
                    "item" : home+path1
                },{
                    "@type" : "ListItem",
                    "position" : 3,
                    "name" : path2,
                    "item" : home+path1+"/"+path2
                },{
                    "@type" : "ListItem",
                    "position" : 4,
                    "name" : path3,
                    "item" : home+path1+"/"+path2+"/"+path3
                },{
                    "@type" : "ListItem",
                    "position" : 5,
                    "name" : path4,
                    "item" : home+path1+"/"+path2+"/"+path3+"/"+path4
                }
            ];
            break;
        case 4:
            var itemlist =[
                {
                    "@type" : "ListItem",
                    "position" : 1,
                    "name" : "Home",
                    "item": home
                },{
                    "@type" : "ListItem",
                    "position" : 2,
                    "name" : path1,
                    "item" : home+path1
                },{
                    "@type" : "ListItem",
                    "position" : 3,
                    "name" : path2,
                    "item" : home+path1+"/"+path2
                },{
                    "@type" : "ListItem",
                    "position" : 4,
                    "name" : path3,
                    "item" : home+path1+"/"+path2+"/"+path3
                }
            ];
            break;
        case 3:
            var itemlist =[
                {
                    "@type" : "ListItem",
                    "position" : 1,
                    "name" : "Home",
                    "item": home
                },{
                    "@type" : "ListItem",
                    "position" : 2,
                    "name" : path1,
                    "item" : home+path1
                },{
                    "@type" : "ListItem",
                    "position" : 3,
                    "name" : path2,
                    "item" : home+path1+"/"+path2
                }
            ];
            break;
        case 2:
            var itemlist =[
                {
                    "@type" : "ListItem",
                    "position" : 1,
                    "name" : "Home",
                    "item": home
                },{
                    "@type" : "ListItem",
                    "position" : 2,
                    "name" : path1,
                    "item" : home+path1
                }
            ];
            break;
    }
    scriptbox2.type = 'application/ld+json';
    scriptbox2.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": itemlist
    });

    document.querySelector('head').appendChild(scriptbox2);
}
$(document).ready(function () {
    breadcrumbDataNew();
});