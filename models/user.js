const  mongoose=require('mongoose');


const  userSchema=mongoose.Schema({
    search_metadata:{
        status:String,
        json_endpoint:String,
        created_at:String,
        processed_at:String,
        google_url:String,
        raw_html_file:String,
        total_time_taken:String
    },
    search_parameters:{
    engine:String,
    q:String,
    location_requested:String,
    location_used:String,
    google_domain:String,
    device:String,

},

search_information:{
    organic_results_state:String,
    query_displayed:String,
    total_results:String,
    time_taken_displayed:String
},
knowledge_graph:{
    title:String,
    image:String,
    description:String,
    source:{
        name:String,
        link:String
    },
    father:String,
    father_links:{
        text:String,
        link:String
    }
},
    
people_also_search_for:{
    name:String,
    link:String,
    image:String
},

   inline_videos:[
        {
            position:String,
            title:String,
            link:String,
            thumbnail:String,
            channel:String,
            duration:String,
            platform:String,
            date:String,
            key_moments:{
                time:String,
                title:String,
                link:String,
                thumbnail:String,
                percentage:String
            }
        }
    ],
    
related_questions:[
    {
        question: String,
       snippet: String,
     title: String,
   link: String,
 displayed_link:String
    }
],
    
// answer_box:[
//   {  
//       type:String,
//       title:String,
//       link:String,
//       displayed_link:String,
//       snippet:String,
//       people_also_search_for:Array,
//       about_this_result:{
//         source:{
//             description:String,
//             icon:String
//         },
//         keywords:Array,
//         languages:Array,
//         regions:String,
//         about_page_link:String,
//       }
// }],

related_searches:[
    {
        query:String,
        link:String
    }
],

// pagination:[
//  {   current:String,
//     next:String,
//     other_pages:[
//      {   nm:String,
//     }
//     ]
// }
// ]



// organic_results:[
//     {
//         position:String,
//         title:String,
//         link:String,
//         displayed_link:String,
//         snippet:String,
//     }   
//         ],

// sitelinks:[
//     {
//      inline:{
//          title:String,
//          link:String
//      },

//     }
     
//  ],



    
    // see_results_about:{
    //     name:String,
    //     extensions:Array
    // },
    // inline_videos:[
    //     {
    //         position:String,
    //         title:String,
    //         link:String,
    //         thumbnail:String,
    //         channel:String,
    //         duration:String,
    //         platform:String,
    //         date:String,
    //         key_moments:{
    //             time:String,
    //             title:String,
    //             link:String,
    //             thumbnail:String,
    //             percentage:String
    //         }
    //     }
    // ],
    

    // ]
    
    
    
   
})

// top_stories:[
//     {
//         title:String,
//     link:String,
//     source:String,
//     date:String,
//     thumbnail:String
// }
// ],

//     }
// ]
// related_questions:[
//     {
//         question: String,
//        snippet: String,
//      title: String,
//    link: String,
//  displayed_link:String
//     }
// ],
// answer_box:[
//   {  
//       type:String,
//       title:String,
//       link:String,
//       displayed_link:String,
//       snippet:String,
//       people_also_search_for:Array,
//       about_this_result:{
//         source:{
//             description:String,
//             icon:String
//         },
//         keywords:Array,
//         languages:Array,
//         regions:String,
//         about_page_link:String,
//       }
// }




// ],


// search_parameters:{
//     engine:String,
//     q:String,
//     location_requested:String,
//     location_used:String,
//     google_domain:String,
//     device:String,

// },
// search_information:{
//     organic_results_state:String,
//     query_displayed:String,
//     total_results:String,
//     time_taken_displayed:String
// },
// knowledge_graph:{
//     title:String,
//     image:String,
//     description:String,
//     source:{
//         name:String,
//         link:String
//     },
//     father:String,
//     father_links:{
//         text:String,
//         link:String
//     }
// },
// people_also_search_for:{
//     name:String,
//     link:String,
//     image:String
// },
// organic_results:[
//     {
//         position:String,
//         title:String,
//         link:String,
//         displayed_link:String,
//         snippet:String,
      
       
         
//         ],

// sitelinks:[
//     {
//      inline:{
//          title:String,
//          link:String
//      },

//     }
     
//  ],
// about_this_result:[
//     { source:{
//      description:String,
//      source_info_link:String,
//      icon:String,
//      } ,
//      keywords:String,
//      related_keywords:String,
//      languages:String,
//      regions:String,
//      about_page_link:String,
//      cached_page_link:String
//    },

// related_searches:[
//     {
//         query:String,
//         link:String
//     }
// ],
// pagination:[
//  {   current:String,
//     next:String,
//     other_pages:[
//      {   type:String,}
//     ]
// }


const usermodel=mongoose.model('user',userSchema);

module.exports= usermodel;