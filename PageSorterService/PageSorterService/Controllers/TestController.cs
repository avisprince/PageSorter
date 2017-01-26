using ImageMagick;
using System;
using System.Collections.Generic;
using System.IO;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PageSorterService.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class TestController : ApiController
    {
        [HttpGet]
        [Route("api/name")]
        public string Name()
        {
            return "Angular";
        }

        [HttpGet]
        [Route("api/pdf")]
        public List<string> Pdf()
        {
            var path = @"C:\Users\avisp\Documents\Visual Studio 2015\Projects\TestPDFSplit\TestPDFSplit\PDF Files\";

            var settings = new MagickReadSettings()
            {
                Density = new Density(300, 300),
            };

            var pdfImageList = new List<string>();

            using (var images = new MagickImageCollection())
            {
                // Add all the pages of the pdf file to the collection
                images.Read(path + "testPDF2.pdf", settings);

                int page = 1;
                foreach (var image in images)
                {
                    // Write page to file that contains the page number
                    //image.Write(path + "DummyPdf_page" + page + ".png");

                    image.Format = MagickFormat.Png;

                    using (var ms = new MemoryStream())
                    {
                        image.Write(ms);

                        pdfImageList.Add(Convert.ToBase64String(ms.ToArray()));
                    }
                }
            }

            return pdfImageList;
        }
    }
}
