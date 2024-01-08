# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [2.0.31](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.30...utils-locations-2.0.31) (2024-01-08)

## [2.0.30](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.29...utils-locations-2.0.30) (2024-01-06)

## [2.0.29](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.28...utils-locations-2.0.29) (2024-01-06)

## [2.0.28](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.27...utils-locations-2.0.28) (2024-01-05)

## [2.0.27](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.26...utils-locations-2.0.27) (2024-01-05)

## [2.0.26](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.25...utils-locations-2.0.26) (2024-01-03)

## [2.0.25](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.24...utils-locations-2.0.25) (2024-01-02)

## [2.0.24](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.23...utils-locations-2.0.24) (2024-01-02)

## [2.0.23](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.22...utils-locations-2.0.23) (2024-01-02)

## [2.0.22](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.21...utils-locations-2.0.22) (2024-01-02)

## [2.0.21](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.20...utils-locations-2.0.21) (2023-12-21)

## [2.0.20](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.19...utils-locations-2.0.20) (2023-12-21)

## [2.0.19](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.18...utils-locations-2.0.19) (2023-12-21)

## [2.0.18](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.17...utils-locations-2.0.18) (2023-12-19)

## [2.0.17](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.16...utils-locations-2.0.17) (2023-12-19)

## [2.0.16](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.15...utils-locations-2.0.16) (2023-12-19)

## [2.0.15](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.14...utils-locations-2.0.15) (2023-12-18)

## [2.0.14](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.13...utils-locations-2.0.14) (2023-12-18)

## [2.0.13](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.12...utils-locations-2.0.13) (2023-12-17)

## [2.0.12](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.11...utils-locations-2.0.12) (2023-12-17)

## [2.0.11](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.10...utils-locations-2.0.11) (2023-12-16)

## [2.0.10](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.9...utils-locations-2.0.10) (2023-12-16)

## [2.0.9](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.8...utils-locations-2.0.9) (2023-12-16)

## [2.0.8](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.7...utils-locations-2.0.8) (2023-12-16)

## [2.0.7](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.6...utils-locations-2.0.7) (2023-12-15)

## [2.0.6](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.5...utils-locations-2.0.6) (2023-12-14)

## [2.0.5](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.4...utils-locations-2.0.5) (2023-12-13)

## [2.0.4](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.3...utils-locations-2.0.4) (2023-12-12)

## [2.0.3](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.2...utils-locations-2.0.3) (2023-12-12)

## [2.0.2](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.1...utils-locations-2.0.2) (2023-12-11)

## [2.0.1](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-2.0.0...utils-locations-2.0.1) (2023-12-11)

## [2.0.0](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-locations-1.0.6...utils-locations-2.0.0) (2023-12-10)


### ⚠ BREAKING CHANGES

* **utils-locations:** Rename library from `utils-format-locations` to `utils-locations`

Split the location functionality into distinct files
- `structure-location.ts` contains the interfaces and the `structureLocation` function
  for converting `Location` to `StructuredLocation`
- `format-location.ts` holds the `formatLocationToString` function for formatting
  `StructuredLocation`into a string

### Features

* **utils-locations:** separate location-related functions into individual files ([#233](https://github.com/tuffz/tuffz-nx-workspace/issues/233)) ([f270263](https://github.com/tuffz/tuffz-nx-workspace/commit/f270263dee2df66a6aa3b9495ebe2a21e13905a6))

## [1.0.6](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-format-location-1.0.5...utils-format-location-1.0.6) (2023-12-10)

## [1.0.5](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-format-location-1.0.4...utils-format-location-1.0.5) (2023-12-10)

## [1.0.4](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-format-location-1.0.3...utils-format-location-1.0.4) (2023-12-10)

## [1.0.3](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-format-location-1.0.2...utils-format-location-1.0.3) (2023-12-10)

## [1.0.2](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-format-location-1.0.1...utils-format-location-1.0.2) (2023-12-10)

## [1.0.1](https://github.com/tuffz/tuffz-nx-workspace/compare/utils-format-location-1.0.0...utils-format-location-1.0.1) (2023-12-10)

## 1.0.0 (2023-12-10)


### ⚠ BREAKING CHANGES

* **utils-format-location:** This function efficiently formats location objects, encompassing city, optional
state, and country fields, rendering them into human-readable strings.

### Features

* **utils-format-location:** introduce `formatlocation` function ([f97b1d6](https://github.com/tuffz/tuffz-nx-workspace/commit/f97b1d6629f01ef5d5a213a43022ac30753e09a2))
