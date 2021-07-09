import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { Comments } from '../classes/comments';
import { Posts } from '../classes/posts';

@Component({
  selector: 'app-httpmethod',
  templateUrl: './httpmethod.component.html',
  styleUrls: ['./httpmethod.component.css']
})
export class HttpmethodComponent implements OnInit {
  title = 'angular11DemoApp';
  listcomments: Comments[];
    listposts: Posts[];
    objPosts:Posts;
    objPuts:Posts;
    objPatch:Posts;
    message:string;
  constructor(private api: GetApiService) { }

  ngOnInit(): void {
    this.api.getcomments().subscribe
      (
        data => {
          console.log("get api data",data);
          this.listcomments = data;
        }
      );

      this.api.getcommentsbyparameter().subscribe
        (
          data => {
            
            this.listposts = data;
            
          }
        );
        var opost = new Posts();

        opost.body = 'testbody';
        opost.title = 'testtitle';
        opost.userId = 5;
        
        this.api.post(opost).subscribe
        (
          data=>{
            this.objPosts= data;
          }
        )

        opost = new Posts();
        opost.body = "updating body";
        opost.title = "updating title";
        opost.userId = 5;

        this.api.put(opost).subscribe
          (
            data=>{
              this.objPuts = data;
            }
          )

        opost = new Posts();
        opost.title = "patched the title";

        this.api.patch(opost).subscribe
            (
              data=>{
                this.objPatch = data;
              }
            )
        this.api.delete().subscribe
        (
          data=>{
            this.message = "Resource has been deleted";
          }
        )
  }

}
