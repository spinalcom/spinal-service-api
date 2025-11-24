/**
 * @packageDocumentation
 * @module Requests-Equipment-Post-ReadStaticDetailsMultiple
 *
 */
import { IReadStaticDetailsMultiple } from "../../../interfaces/IGeneral";
export default function getReadStaticDetailsMultiple(buildingId: string, dynamicIds: number[], size?: number): Promise<IReadStaticDetailsMultiple[]>;
