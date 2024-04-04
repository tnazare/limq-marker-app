import {badRequestErrorResponse} from "./badRequestErrorResponse";
import type {ZodIssue} from "zod";

export const badRequestErrorResponseFromZodIssues = (issues: ZodIssue[] | undefined) => {
  if(issues) {
    const additionalDetails: string[] = [];
    issues.forEach(issue => {
      if (issue.code === "invalid_union") {
        const { unionErrors } = issue;
        if (unionErrors) {
          unionErrors.forEach(unionError => {
            unionError.issues.forEach(issue => {
              const errorMessageString = `${issue.message} for ${issue.path.join(".")}`;
              if (!additionalDetails.includes(errorMessageString)) {
                additionalDetails.push(`${issue.message} for ${issue.path.join(".")}`);
              }
            });
          });
        }
      } else {
        const errorMessageString = `${issue.message} for ${issue.path.join(".")}`;
        if (!additionalDetails.includes(errorMessageString)) {
          additionalDetails.push(`${issue.message} for ${issue.path.join(".")}`);
        }
      }
    });

    return badRequestErrorResponse(additionalDetails.join(". "));
  } 
    return badRequestErrorResponse();
  
}
