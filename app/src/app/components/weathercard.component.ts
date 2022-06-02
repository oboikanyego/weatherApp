/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-weathercard',
  templateUrl: './weathercard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class weathercardComponent {
  @Input('showCard')
  public showCard: any = false;
  @Input('weatherdata')
  public weatherdata: any = {};
  @Output('Log')
  public Log: any = new EventEmitter<any>();
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_3P6VFBLkr9kwXH1x(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_3P6VFBLkr9kwXH1x(bh) {
    try {
      bh = this.sd_rrJniyc7z8mVTBgl(bh);
      //appendnew_next_sd_3P6VFBLkr9kwXH1x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3P6VFBLkr9kwXH1x');
    }
  }

  //appendnew_flow_weathercardComponent_start

  sd_rrJniyc7z8mVTBgl(bh) {
    try {
      this.page.localStorage = localStorage;
      this.page.showCard = false;
      //appendnew_next_sd_rrJniyc7z8mVTBgl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rrJniyc7z8mVTBgl');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_weathercardComponent_Catch
}
