export type Base64 = string // TODO: bessere Lösung

export enum EDigestAlgorithm { //DSS offers much more options, see public enum DigestAlgorithm
    SHA1 = "SHA1",
    SHA224 = "SHA224",
    SHA256 = "SHA256",
    SHA512 = "SHA512" 
}

export enum ESignatureAlgorithm {
    SHA256 = "RSA_SHA256"
}

export enum EEncryptionAlgorithm {
    RSA = "RSA"
}

export enum ASiCContainerType {
    ASiC_S,
    ASiC_E
}

export enum ESignatureLevel {
    PAdES_B = "PAdES_BASELINE_B",
    XAdES_B = "XAdES_BASELINE_B"
}

export enum ESignaturePackaging {
    enveloping = "ENVELOPING"
}