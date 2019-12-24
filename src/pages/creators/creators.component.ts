import { Component, OnInit } from '@angular/core';
import { CreatorsService} from '../../providers/creators.service'


@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  creators;

  constructor(public creatorsProvider: CreatorsService) { }

  async ngOnInit() {
    this.creators = await this.creatorsProvider.getCreators();
    console.log(this.creators);
  }

}
