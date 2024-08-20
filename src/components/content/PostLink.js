
import * as cheerio from 'cheerio';


async function create_link_info(link){
  
    let ret =  {
        title : "",
        root :  "",
        sitename : "",
        url : "",
        desc  : "",
        headline : "",
        icon : "",
        featuredimage : "",
        keywords : ""
    };

 
    
    try {
        // Create a new URL object
        const url = new URL(link);
    
        // Get the root address (base URL)
        const rootAddress = url.origin;
        ret['root'] = rootAddress;
      } catch (error) {
        ret['root'] = 'invalid';
    }

    await fetch(link)
    .then((result) => result.text())
    .then((page) => {
      const $ = cheerio.load(page);
      ret['title'] = 'piss';
      ret['title'] =
        $('meta[property="og:title"]').attr("content") ||
        $("title").text() ||
        $('meta[name="title"]').attr("content");
       ret['desc'] =
        $('meta[property="og:description"]').attr("content") ||
        $('meta[name="description"]').attr("content");
       ret['url'] = $('meta[property="og:url"]').attr("content");
       ret['sitename'] = $('meta[property="og:site_name"]').attr("content");
      ret['featuredimage'] =
        $('meta[property="og:image"]').attr("content") ||
        $('meta[property="og:image:url"]').attr("content");
    ret['icon'] =
        $('link[rel="icon"]').attr("href") ||
        $('link[rel="shortcut icon"]').attr("href");
     ret['keywords'] =
        $('meta[property="og:keywords"]').attr("content") ||
        $('meta[name="keywords"]').attr("content");
      
    }).catch(error => {
        console.log(error);
    })
    ret['icon'] = ret['root'] + "/favicon.ico";
    //console.log("RETURNING FROM URL")
    //console.log(ret)

    return ret;

}

export default async function PostLink({post}){
    const link = await create_link_info(post.link);

    return (
        <div className="mt-10">
        <a href={post.link}>
        <div className="border rounded-2xl">
          <div className="p-4">
          <img className="rounded-lg border"
                                    src={link.featuredimage}
                                    alt={link.desc}/>
            <h1 className="font-medium">
              {link.title}
            </h1>
            <p className="text-sm font-medium text-gray-600">
            {link.desc}
            </p>
            <i className="text-gray-500 text-xs font-semibold">
            {link.sitename} - {link.root} 
            </i>
          </div>
        </div>
        </a>
      </div>
    )
}