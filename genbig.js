var n = 25000;
var prefix = 'longrunagain';

var header =
`<?xml version="1.0" encoding="utf-8" standalone="no"?>
<bulkDataRecord xmlns="http://www.imsglobal.org/services/lis/bdemsv1p0/imsbdemsFileData_v1p0">`;

  
var footer =
`</bulkDataRecord>`;

var body = '';

function createTemplate(id, name) {
  return `<transactionRecord>
      <transactionOpIdentifier>1057-C-003280-01-0590-1-SR1-01892-SR0400</transactionOpIdentifier>
      <serviceName>cmsv1p0</serviceName>
      <interfaceName>coursetemplatemanager</interfaceName>
      <operationName>replaceCourseTemplate</operationName>
      <parameterSet>
        <parameterRecord>
          <parameterInvoc>In</parameterInvoc>
          <parameterName>sourcedId</parameterName>
          <parameterType>GUID</parameterType>
          <parameterValue>
                    <guid>${id}</guid>
                  </parameterValue>
        </parameterRecord>
        <parameterRecord>
          <parameterInvoc>In</parameterInvoc>
          <parameterName>thisCanBeAnything</parameterName>
          <parameterType>CourseTemplateRecord</parameterType>
          <parameterValue>
          <ims:courseTemplateRecord xmlns:ims="http://www.imsglobal.org/services/lis/cmsv1p0/imscms_v1p0">
              <ims:sourcedGUID>
                 <ims:sourcedId>${id}</ims:sourcedId>
              </ims:sourcedGUID>
              <ims:courseTemplate>
                 <ims:title>
                    <ims:textString>${name}</ims:textString>
                 </ims:title>
                 <ims:org>
                    <ims:orgName>
                       <ims:textString>LIS_Test_Department</ims:textString>
                    </ims:orgName>
                 </ims:org>
              </ims:courseTemplate>
           </ims:courseTemplateRecord>
                   </parameterValue>
        </parameterRecord>
      </parameterSet>
    </transactionRecord>`;
}

function createCourse(id, name, i) {
  return `<transactionRecord>
    <transactionOpIdentifier>replaceCourseOffering0_caec92a0-8052-41dc-ac00-8fc78d566409</transactionOpIdentifier>
    <serviceName>cmsv1p0</serviceName>
    <interfaceName>courseofferingtemplate</interfaceName>
    <operationName>replaceCourseOffering</operationName>
    <parameterSet>
      <parameterRecord>
        <parameterInvoc>In</parameterInvoc>
        <parameterName>sourcedId</parameterName>
        <parameterType>GUID</parameterType>
        <parameterValue>
          <guid>${id}</guid>
        </parameterValue>
      </parameterRecord>
      <parameterRecord>
        <parameterInvoc>In</parameterInvoc>
        <parameterName>record</parameterName>
        <parameterType>CourseOfferingRecord</parameterType>
        <parameterValue>
          <courseOfferingRecord xmlns="http://www.imsglobal.org/services/lis/cmsv1p0/imscms_v1p0">
            <sourcedGUID>
              <sourcedId>${id}</sourcedId>
            </sourcedGUID>
            <courseOffering>
              <label>
                <language>en-US</language>
                <textString>${name}</textString>
              </label>
              <title>
                <language>en-US</language>
                <textString>${name}</textString>
              </title>
              <parentTemplateId>${prefix}_ipsis_template_1</parentTemplateId>
              <catalogDescription>
                <shortDescription>
                  <language>en-US</language>
                  <textString>${i}</textString>
                </shortDescription>
                <longDescription>
                  <language>en-US</language>
                  <textString>${name}</textString>
                </longDescription>
              </catalogDescription>
              <status>Active</status>
              <org>
                <orgName>
                  <language>en-US</language>
                  <textString>LIS_Test_Department</textString>
                </orgName>
              </org>
              <timeFrame>
                <begin>2014-10-01T00:00:00.000000</begin>
                <end>2017-12-01T00:00:00.000000</end>
              </timeFrame>
              <dataSource>csvparser</dataSource>
              <extension>
                <extensionNameVocabulary />
                <extensionTypeVocabulary>http://www.imsglobal.org/lis/imsv1p0/extensionvocabularyv1p0</extensionTypeVocabulary>
                <extensionField>
                  <fieldName>Mode</fieldName>
                  <fieldType>String</fieldType>
                  <fieldValue>C</fieldValue>
                </extensionField>
              </extension>
            </courseOffering>
          </courseOfferingRecord>
        </parameterValue>
      </parameterRecord>
    </parameterSet>
  </transactionRecord>`;
}

for (var i = 1; i <= 2; i++) {
  body += createTemplate(`${prefix}_ipsis_template_${i}`, `${prefix} ipsis template ${i}`);
}

for (i = 1; i <= n ; i++) {
    body += createCourse(`${prefix}_ipsis_course_${i}`, `${prefix} ipsis course ${i}`, i);
}

console.log(header + '\n' + body + '\n' + footer);
