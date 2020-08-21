import { Component, OnInit } from '@angular/core';
import {AppStateService} from '../../services/app-state.service';
import {SignalDoc} from '../../services/models/models';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-doc-detail',
  templateUrl: './doc-detail.component.html',
  styleUrls: ['./doc-detail.component.scss']
})
export class DocDetailComponent implements OnInit {

  public signalDoc: SignalDoc;
  public dsChartUrl: SafeResourceUrl;
  public pdfUrl: SafeResourceUrl;

  constructor(private appStateService: AppStateService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.signalDoc = this.appStateService.selectedDoc$.getValue();
    this.appStateService.selectedDoc$.subscribe((doc) => {
      this.signalDoc = doc;
      if (this.signalDoc.doc_type === 'pdf') {
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.signalDoc.doc.doc_url);
      }
      if (this.signalDoc.doc_type === 'chart') {
        //"https://datastudio.google.com/embed/reporting/80821d94-7229-409f-b78e-916c270193df/page/SwlbB"
        this.dsChartUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.signalDoc.doc.doc_url.replace("reporting", "embed/reporting"));
      }
    });
  }
}
